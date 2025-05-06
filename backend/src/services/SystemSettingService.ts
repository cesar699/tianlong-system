
import { AppDataSource } from '../data-source';
import { SystemSetting } from '../entities/SystemSetting';

export class SystemSettingService {
    private settingRepo = AppDataSource.getRepository(SystemSetting);

    async getAll() {
        return await this.settingRepo.find();
    }

    async getValue(key: string) {
        const setting = await this.settingRepo.findOneBy({ key });
        return setting?.value ?? null;
    }

    async setValue(key: string, value: string, description = '') {
        let setting = await this.settingRepo.findOneBy({ key });
        if (!setting) {
            setting = this.settingRepo.create({ key, value, description });
        } else {
            setting.value = value;
        }
        return await this.settingRepo.save(setting);
    }

    async updateAll(settings: { key: string; value: string; description?: string }[]) {
        for (const s of settings) {
            await this.setValue(s.key, s.value, s.description || '');
        }
    }
}

export const systemSettingService = new SystemSettingService();
