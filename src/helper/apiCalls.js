export const getPricingPlans = async () => {
    try {
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/pricing-plans`);
        if (!response.ok) {
          throw new Error('Failed to fetch pricing plans');
        }
        const data = await response.json();
        return data
      } catch (error) {
        throw new Error('Failed to fetch pricing plans');
      }
}