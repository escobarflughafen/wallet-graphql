import { DataSource } from "typeorm";
import { user } from "../Entities/user";
import { wallet } from "../Entities/wallet";
import { currency } from "../Entities/currency";
import { location } from "../Entities/location";
import { transaction } from "../Entities/transaction";

const SqliteDataSource = new DataSource({
    type: "sqlite",
    database: "./wallet.db", //db name
    synchronize: false,
    entities: [user, wallet, currency, location, transaction],
});

export default SqliteDataSource;