
import { Module, HttpModule } from '@nestjs/common';
import { QlService } from './ql.service';
import { QlController } from './ql.controller';

@Module({
  imports: [HttpModule],
  providers: [QlService],
  controllers: [QlController],
})
export class QlModule {}
