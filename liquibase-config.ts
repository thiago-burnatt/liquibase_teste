import { LiquibaseConfig, Liquibase } from 'liquibase';

const myConfig: LiquibaseConfig = {
  changeLogFile: './changelog.xml',
  url: 'jdbc:postgresql://ep-black-truth-a4our3tg.us-east-1.aws.neon.tech/verceldb?user=default&password=SiQmP9A2BRZO&sslmode=require',
  username: 'admin',
  password: 'admin',
};
const instance = new Liquibase(myConfig);

export default async function doEet() {
  await instance.status();
  await instance.update({});
}
