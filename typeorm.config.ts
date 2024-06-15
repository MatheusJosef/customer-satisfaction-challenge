import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Survey } from './src/survey/survey.entity';
import { Fill } from './src/survey/fill.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: parseInt(process.env.DB_PORT, 10),
  username: 'test',
  password: 'test',
  database: 'test',
  entities: [Survey, Fill],
  synchronize: true,
};
