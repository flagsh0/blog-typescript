import DataLoader from 'dataloader';
import unique from 'lib/api/unique';
import { getUserByIdsQuery } from 'db/sql/users';

const createLoaders = {
  user: new DataLoader((keys) => {
    const ids = unique(keys);
    return getUserByIdsQuery(ids)
      .then((rows) => (
        keys.map((key) => (
          rows.find((x) => x.id === key || x.seq_id.toString() === key)
        ))
      ));
  })
};

export default createLoaders;
