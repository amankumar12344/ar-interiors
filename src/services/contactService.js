import { request } from './api';

export const contactService = {
  async submitInquiry(formData) {
    // Allows plugging into Spring Boot / Node / Supabase endpoint seamlessly
    await request('/inquiries', {
      method: 'POST',
      body: JSON.stringify(formData)
    });

    console.log('[ContactService] Lead submitted successfully:', formData);
    return {
      success: true,
      message: 'Thank you for contacting AR Interiors. Our senior architect will review your project brief and contact you within 24 hours.'
    };
  }
};
