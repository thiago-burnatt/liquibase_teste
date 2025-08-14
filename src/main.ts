import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// import { LiquibaseConfig, Liquibase } from 'liquibase';
//
// const myConfig: LiquibaseConfig = {
//   changeLogFile: './changelog.xml',
//   url: 'jdbc:postgresql://localhost:5433/liquibase_test',
//   username: 'admin',
//   password: 'admin',
// };
// const instance = new Liquibase(myConfig);
//
// export async function doEet() {
//   await instance.status();
//   await instance.update({});
//   // await instance.dropAll();
// }

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
  // await doEet();
}
bootstrap();
