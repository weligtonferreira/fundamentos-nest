import { Module } from '@nestjs/common';

import { UserMemoryController } from './user-memory.controller';
import { UserMemoryService } from './user-memory.service';

@Module({
  imports: [],
  controllers: [UserMemoryController],
  providers: [UserMemoryService],
})
export class UserMemoryModule {}
