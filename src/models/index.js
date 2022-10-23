// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { PageScore } = initSchema(schema);

export {
  PageScore
};