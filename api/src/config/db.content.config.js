const dbContent = {
  Packages: {
    simpleAttribute: {
      package_id: { unique: false, required: false, },
      active_delivery_id: { unique: false, required: false, },
      description: { unique: false, required: false, },
      weight: { unique: false, required: false, },
      width: { unique: false, required: false, },
      height: { unique: false, required: false, },
      depth: { unique: false, required: false, },
      from_name: { unique: false, required: false, },
      from_address: { unique: false, required: false, },
      from_location: { unique: false, required: false, },
      to_name: { unique: false, required: false, },
      to_address: { unique: false, required: false, },
      to_location: { unique: false, required: false, },
    },
    attributeWithSimpleJoin: {
      
    },
    attributeWithMultipleJoin: {
      deliveries: { required: false, attributeName: 'package_id', entityName: 'Deliveries' },
    }
  },
  Deliveries: {
    simpleAttribute: {
      delivery_id: { unique: false, required: false, },
      package_id: { unique: false, required: false, },
      pickup_time: { unique: false, required: false, },
      start_time: { unique: false, required: false, },
      end_time: { unique: false, required: false, },
      location: { unique: false, required: false, },
      status: { unique: false, required: false, },
    },
    attributeWithSimpleJoin: {
      package: { unique: false, required: false, second: 'package_id', entityName: 'Packages' },
    },
    attributeWithMultipleJoin: {
      
    }
  },
}

const getUniqueAndRequiredKeys = (modelKey) => {
  const attributes = dbContent[modelKey].simpleAttribute;

  const uniqueKeys = [];
  const requiredKeys = [];

  for (const key in attributes) {
    if (attributes[key].unique === true) {
      uniqueKeys.push(key);
    }

    if (attributes[key].required === true) {
      requiredKeys.push(key);
    }
  }

  return { uniqueKeys, requiredKeys }
}

module.exports = {
  dbContent,
  getUniqueAndRequiredKeys
}