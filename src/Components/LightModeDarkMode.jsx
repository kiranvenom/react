import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

const LightModeDarkMode = () => {
	return (
		<div className='flex items-center'>
			<Switch id='mode' className='mr-4' />
			<Label htmlFor='mode'>Dark Mode</Label>
		</div>
	);
};

export default LightModeDarkMode;
