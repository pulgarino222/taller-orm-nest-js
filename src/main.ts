import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from 'dotenv';

config()
const PORT =process.env.PORT||3001

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT,()=>{
    console.log(`port on port ${PORT}`);
  
  });
}
bootstrap();
