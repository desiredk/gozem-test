const { getDb } = require("../models");
const { Op } = require("sequelize");

class FilterRepositoriesUtils {

    db = {};

    constructor() {
        this.db = getDb();
    }

    getOrder(orderby) {
        const ASC = "ASC";
        const DESC = "DESC";
        let items = [];

        let isDESC = (orderby[0] == "-");
        let order = isDESC ? DESC : ASC;
        if (isDESC) orderby = orderby.substring(1);

        let attributes = orderby.split('__');
        let endItem = attributes.pop();

        let newAttributes = attributes.map(attribute => attribute.split(/(?=[A-Z])/).map(item => item.toLowerCase()).join('_') + 's');

        for (let i = 0; i < newAttributes.length; i++) {
            items.push({
                model: this.db[newAttributes[i]],
                as: attributes[i]
            });
        }

        items.push(endItem);
        items.push(order);

        return items;
    }

    getAllOrder(allOrderby) {
        let order = [];

        allOrderby.forEach(orderby => {
            order.push(this.getOrder(orderby));
        });

        return order;
    }

    getIndexOfItem(and, key) {
        for (let i = 0; i < and.length; i++) {
            const item = and[i];
            if (Object.keys(item).includes(key)) return i;
        }

        return -1;
    }

    formatAndOrOrQuery(filter) {
        const includes = [];
        let andOrOr = [];

        let icontainsList = {};
        let gteList = {};
        let gtList = {};
        let lteList = {};
        let ltList = {};
        let otherList = {};

        // __icontains List
        icontainsList = Object.fromEntries(Object.entries(filter).filter(([key]) => key.includes('__icontains')));
        for (let key in icontainsList) {
            let newKey = key.substring(0, key.indexOf("__icontains"));
            if (newKey.includes("__")) {
                // save newKey for __icontains
                const neewArray = newKey.split("__");
                includes.push(neewArray.slice(0, neewArray.length - 1));

                newKey = "$" + newKey.replaceAll("__", ".") + "$";
            }

            let index = this.getIndexOfItem(andOrOr, newKey);

            if (index == -1) {
                const newObject = {};
                newObject[newKey] = {
                    [Op.iLike]: '%' + icontainsList[key] + '%'
                };
                andOrOr.push(newObject);
            } else {
                Object.assign(andOrOr[index][newKey],{
                    [Op.iLike]: '%' + icontainsList[key] + '%'
                });
            }
        }

        // __gte List
        gteList = Object.fromEntries(Object.entries(filter).filter(([key]) => (key + "uuu").includes('__gteuuu')));
        for (let key in gteList) {
            let newKey = key.substring(0, key.indexOf("__gte"));
            if (newKey.includes("__")) {
                // save newKey for __gteuuu
                const neewArray = newKey.split("__");
                includes.push(neewArray.slice(0, neewArray.length - 1));

                newKey = "$" + newKey.replaceAll("__", ".") + "$";
            }

            let index = this.getIndexOfItem(andOrOr, newKey);

            if (index == -1) {
                const newObject = {};
                newObject[newKey] = {
                    [Op.gte]: gteList[key]
                };
                andOrOr.push(newObject);
            } else {
                Object.assign(andOrOr[index][newKey],{
                    [Op.lte]: gteList[key]
                });
            }
        }

        // __gt List
        gtList = Object.fromEntries(Object.entries(filter).filter(([key]) => (key + "uuu").includes('__gtuuu')));
        for (let key in gtList) {
            let newKey = key.substring(0, key.indexOf("__gt"));
            if (newKey.includes("__")) {
                // save newKey for __gtuuu
                const neewArray = newKey.split("__");
                includes.push(neewArray.slice(0, neewArray.length - 1));

                newKey = "$" + newKey.replaceAll("__", ".") + "$";
            }

            let index = this.getIndexOfItem(andOrOr, newKey);

            if (index == -1) {
                const newObject = {};
                newObject[newKey] = {
                    [Op.gte]: gtList[key]
                };
                andOrOr.push(newObject);
            } else {
                Object.assign(andOrOr[index][newKey],{
                    [Op.lte]: gtList[key]
                });
            }
        }

        // __lte List
        lteList = Object.fromEntries(Object.entries(filter).filter(([key]) => (key + "uuu").includes('__lteuuu')));
        for (let key in lteList) {
            let newKey = key.substring(0, key.indexOf("__lte"));
            if (newKey.includes("__")) {
                // save newKey for __lteuuu
                const neewArray = newKey.split("__");
                includes.push(neewArray.slice(0, neewArray.length - 1));

                newKey = "$" + newKey.replaceAll("__", ".") + "$";
            }

            let index = this.getIndexOfItem(andOrOr, newKey);

            if (index == -1) {
                const newObject = {};
                newObject[newKey] = {
                    [Op.lte]: lteList[key]
                };
                andOrOr.push(newObject);
            } else {
                Object.assign(andOrOr[index][newKey],{
                    [Op.lte]: lteList[key]
                });
            }
        }

        // __lt List
        ltList = Object.fromEntries(Object.entries(filter).filter(([key]) => (key + "uuu").includes('__ltuuu')));
        for (let key in ltList) {
            let newKey = key.substring(0, key.indexOf("__lt"));
            if (newKey.includes("__")) {
                // save newKey for __ltuuu
                const neewArray = newKey.split("__");
                includes.push(neewArray.slice(0, neewArray.length - 1));

                newKey = "$" + newKey.replaceAll("__", ".") + "$";
            }

            let index = this.getIndexOfItem(andOrOr, newKey);

            if (index == -1) {
                const newObject = {};
                newObject[newKey] = {
                    [Op.lte]: ltList[key]
                };
                andOrOr.push(newObject);
            } else {
                Object.assign(andOrOr[index][newKey],{
                    [Op.lte]: ltList[key]
                });
            }
        }

        // other List
        otherList = Object.fromEntries(Object.entries(filter).filter(([key]) => {
            return !key.includes('__icontains') && !key.includes('__gt') && !key.includes('__lt');
        }));
        for (let key in otherList) {
            let newKey = key;
            if (newKey.includes("__")) {
                // save newKey for otherList
                const neewArray = newKey.split("__");
                includes.push(neewArray.slice(0, neewArray.length - 1));

                newKey = "$" + newKey.replaceAll("__", ".") + "$";
            }

            let index = this.getIndexOfItem(andOrOr, newKey);

            let value = otherList[key];
            if (index == -1) {
                const newObject = {};
                newObject[newKey] = (value !== 'notNull') ? value : {
                    [Op.ne]: null
                };
                andOrOr.push(newObject);
            } else {
                andOrOr[index][newKey] = (value !== 'notNull') ? value : {
                    [Op.ne]: null
                };
            }
        }

        return {
            andOrOr,
            includes
        };
    }

    getAllFilter(filter) {
        let where = {};
        let or = [];

        let q_list = [];

        // q_list
        if ("q_list" in filter) {
            q_list = filter.q_list;
            delete filter.q_list;
        }

        // and
        const andRep = this.formatAndOrOrQuery(filter);
        const and = andRep.andOrOr;
        const andOrOrIncludes =  andRep.includes;

        // or
        q_list.forEach(item => {
            const orRep = this.formatAndOrOrQuery(item);
            andOrOrIncludes.push(...orRep.includes);

            or.push({
                [Op.and]: orRep.andOrOr
            });
        });

        let objectAnd = {};
        let objectOr = {};
        if (or.length > 0) {
            objectOr = {
                [Op.or]: or
            };
        }
        if (and.length > 0) {
            objectAnd = {
                [Op.and]: and
            };
        }
        let object = {
            ...objectAnd,
            ...objectOr
        };

        Object.assign(where,object);

        return {
            where,
            andOrOrIncludes
        };
    }

    formatOption(body, defaultAssociation = "") {
        let options = {
            where: {
                isNotDelete: true,
            },
            order: [
                ['id', 'DESC'],
            ],
            include: [],
        };

        let attributes = [];
        let includes = [];
        let andOrOrIncludes = [];

        // filter
        if ("filter" in body) {
            const allFilter = this.getAllFilter(body.filter)
            options.where = {
                isNotDelete: true,
                ...allFilter.where
            };

            andOrOrIncludes = allFilter.andOrOrIncludes
        }

        // orderby
        if ("orderby" in body && body.orderby.length > 0) options.order = this.getAllOrder(body.orderby);

        // defaultClass
        if (defaultAssociation != "") options.association = defaultAssociation;

        // paginate
        if ("paginate" in body && "page" in body.paginate && "pageSize" in body.paginate) {
            options.limit = body.paginate.pageSize;
            options.offset = (body.paginate.page - 1) * body.paginate.pageSize;
        }

        // attributes: ['foo', 'bar']
        if ("just" in body) {
            const keys = Object.keys(body.just);

            attributes = keys.filter(key => typeof body.just[key] == "string");
            options.attributes = [];
            attributes.forEach(key => {
                options.attributes.push(key);
            });

            includes = keys.filter(key => typeof body.just[key] == "object");
            includes.forEach(key => {
                options.include.push(this.formatOption({
                        just: body.just[key]
                    },
                    key
                ));
            });
        }

        if (defaultAssociation === "") {
            this.addFilterIncludeIfNotExist(options, andOrOrIncludes)
        }

        return options;
    }

    addFilterIncludeIfNotExist(options, andOrOrIncludes) {
        for (let i = 0; i < andOrOrIncludes.length; i++) {
            this.addFilterIncludeIfNotExistInterne(andOrOrIncludes[i], options.include, 0);
        }


        return options;
    }

    addFilterIncludeIfNotExistInterne(andOrOrInclude, include, x) {
        if (andOrOrInclude.length === x) return

        let see = false;
        let i = 0;
        for (; i < include.length; i++) {
            if (include[i].association === andOrOrInclude[x]) {
                see = true;
                break; // device Financing, rapport statistique à envoyer (Data and BI Driving)
            }
        }

        if (!see) {
            include.push({
                where: {
                    isNotDelete: true
                },
                order: [],
                include: [],
                association: andOrOrInclude[x],
                attributes: []
            })
        }

        this.addFilterIncludeIfNotExistInterne(andOrOrInclude, include[i].include, x + 1);
    }
}

module.exports = new FilterRepositoriesUtils();
