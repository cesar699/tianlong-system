import { Module, HttpModule } from '@nestjs/common';
import { NcmService } from './ncm.service';
import { NcmController } from './ncm.controller';
@Module({ imports: [HttpModule], providers: [NcmService], controllers: [NcmController] })
export class NcmModule {}