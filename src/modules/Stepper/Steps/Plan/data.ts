import iconArcade from '@/assets/icon-arcade.svg';
import iconAdvanced from '@/assets/icon-advanced.svg';
import iconPro from '@/assets/icon-pro.svg';

interface PlanOption {
  name: string;
  monthlyPrice: number;
  yearlyPrice: number;
  icon: string;
}

export const planOptions: PlanOption[] = [
  { name: 'Arcade', monthlyPrice: 9, yearlyPrice: 90, icon: iconArcade },
  { name: 'Advanced', monthlyPrice: 12, yearlyPrice: 120, icon: iconAdvanced },
  { name: 'Pro', monthlyPrice: 15, yearlyPrice: 150, icon: iconPro },
];
