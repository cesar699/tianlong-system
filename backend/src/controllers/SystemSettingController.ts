
import { Router } from 'express';
import { systemSettingService } from '../services/SystemSettingService';

const router = Router();

router.get('/', async (req, res) => {
    const all = await systemSettingService.getAll();
    res.json(all);
});

router.post('/', async (req, res) => {
    const { settings } = req.body;
    await systemSettingService.updateAll(settings);
    res.json({ success: true });
});

export default router;
