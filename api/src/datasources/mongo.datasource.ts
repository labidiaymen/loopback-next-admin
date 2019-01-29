

import { inject } from '@loopback/core';
import { juggler, AnyObject } from '@loopback/repository';
const config = require('./mongo.datasource.json');

export class MongoDataSource extends juggler.DataSource {
  static dataSourceName = 'mongo';

  constructor(
    @inject('datasources.config.mongo', { optional: true })
    dsConfig: AnyObject = config,
  ) {
    super(dsConfig);
  }
}
