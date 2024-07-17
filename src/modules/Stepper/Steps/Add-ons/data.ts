interface AddOnOption {
  name: string
  description: string
  monthlyPrice: number
  yearlyPrice: number
}

export const addOnOptions: AddOnOption[] = [
  { name: "Online service", description: "Access to multiplayer games", monthlyPrice: 1, yearlyPrice: 10 },
  { name: "Larger storage", description: "Extra 1TB of cloud save", monthlyPrice: 2, yearlyPrice: 20 },
  { name: "Customizable profile", description: "Custom theme on your profile", monthlyPrice: 2, yearlyPrice: 20 }
]
