const verifySignUpMiddleware = require('../../api/middlewares/authJwt.middleware')
const { getUniqueAndRequiredKeys } = require('../config/db.content.config');

module.exports = class MainMiddleware {
  constructor(modelKey, entityService) {
    this.modelKey = modelKey;
    this.entityService = entityService
  }

  async verifyIfAttributesIsRequiredOrIsUnique(body, res, isUpdate = false) {
    let haveError = false
    const error = {
      required: [],
      unique: [],
    }

    const { requiredKeys, uniqueKeys } = getUniqueAndRequiredKeys(this.modelKey)

    if (!isUpdate) {
      requiredKeys.forEach(item => {
        let isOk = false

        if (item in body && (body[item] === false || body[item])) {
          isOk = true
        }

        if (!isOk) {
          haveError = true
          error.required.push(item)
        }
      })
    } else if (!('id' in body)) {
      haveError = true
      error.required.push('id')
    }

    for(let i = 0; i < uniqueKeys.length; i++) {
      if (uniqueKeys[i] in body) {
        // uniqueKeys
        const filter = {}
        filter[uniqueKeys[i]] = body[uniqueKeys[i]]
        const array = (await this.entityService.filter({ filter })).body.rows
        if (array.length !== 0) {
          let thisIsOk = true
          if ('id' in body && body.id === array[0].id) {
            thisIsOk = false
          }

          if (thisIsOk) {
            haveError = true
            error.unique.push(uniqueKeys[i])

            break
          }
        }
      }
    }

    /*console.log(" this.modelKey ", this.modelKey)
    console.log(" body ", body)*/

    if (!haveError) {
      return true
    }

    return res.status(400).send(error);
  }

  async main(req, res, next, isCall = true) {
    let rep = false

    rep = await this.mainOtherControl(req, res, next)
    if (rep !== true) return rep

    rep = await verifySignUpMiddleware.verifyToken(req, res, next, true)
    if (rep !== true) return rep

    if (isCall) return rep

    if (rep) {
      next()
    }
  }

  async filter(req, res, next) {
    let rep = false

    rep = await this.filterOtherControl(req, res, next)
    if (rep !== true) return rep

    rep = await this.main(req, res, next)
    if (rep !== true) return rep

    if (rep === true) {
      next()
    } else return rep
  }

  async createAll(req, res, next) {
    let rep = false

    rep = await this.createAllOtherControl(req, res, next)
    if (rep !== true) return rep

    rep = await this.main(req, res, next)
    if (rep !== true) return rep

    if (rep) {
      next()
    }
  }

  async updateAll(req, res, next) {
    let rep = false

    rep = await this.updateAllOtherControl(req, res, next)
    if (rep !== true) return rep

    rep = await this.main(req, res, next)
    if (rep !== true) return rep

    if (rep) {
      next()
    }
  }

  async create(req, res, next) {
    let rep = false

    rep = await this.createOtherControl(req, res, next)
    if (rep !== true) return rep

    rep = await this.main(req, res, next)
    if (rep !== true) return rep

    rep = await this.verifyIfAttributesIsRequiredOrIsUnique(req.body, res)
    if (rep !== true) return rep

    if (rep) {
      next()
    }
  }

  async update(req, res, next) {
    let rep = false

    rep = await this.updateOtherControl(req, res, next)
    if (rep !== true) return rep

    rep = await this.main(req, res, next)
    if (rep !== true) return rep

    rep = await this.verifyIfAttributesIsRequiredOrIsUnique(req.body, res, true)
    if (rep !== true) return rep

    if (rep) {
      next()
    }
  }

  async delete(req, res, next) {
    let rep = false

    rep = await this.deleteOtherControl(req, res, next)
    if (rep !== true) return rep

    rep = await this.main(req, res, next)
    if (rep !== true) return rep

    if (rep) {
      next()
    }
  }

  async mainOtherControl(req, res, next) {
    let rep = true

    return rep
  }

  async filterOtherControl(req, res, next) {
    let rep = true

    return rep
  }

  async createAllOtherControl(req, res, next) {
    let rep = true

    return rep
  }

  async updateAllOtherControl(req, res, next) {
    let rep = true

    return rep
  }

  async createOtherControl(req, res, next) {
    let rep = true

    return rep
  }

  async updateOtherControl(req, res, next) {
    let rep = true

    return rep
  }

  async deleteOtherControl(req, res, next) {
    let rep = true

    return rep
  }
}
