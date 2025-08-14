import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { LiquibaseConfig, Liquibase } from 'liquibase';

const myConfig: LiquibaseConfig = {
  changeLogFile: './changelog.xml',
  url: 'jdbc:postgresql://ep-black-truth-a4our3tg.us-east-1.aws.neon.tech/verceldb?user=default&password=SiQmP9A2BRZO&sslmode=require',
  username: 'admin',
  password: 'admin',
};
const instance = new Liquibase(myConfig);

export async function doEet() {
  await instance.status();
  await instance.update({});
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
  doEet();
}
bootstrap();
