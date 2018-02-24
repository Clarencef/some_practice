import { mergeTypes } from 'merge-graphql-schemas';
import channel from './channel';
import message from './message';
import team from './team';
import user from './user';

const types = [
  channel,
  message,
  team,
  user,
];

export default mergeTypes(types);
