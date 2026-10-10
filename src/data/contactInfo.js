export const CONTACT_INFO = {
  studioName: 'AR INTERIORS & ARCHITECT DESIGNER STUDIO',
  phoneDisplay: '+91 85859 51135',
  phoneRaw: '+918585951135',
  whatsappNumber: '918585951135',
  email: 'info@arinteriorsnoida.com',
  address: 'Building No. B69, Sector 2, Near Metro Station Sector 15, Noida, Uttar Pradesh - 201301',
  hours: 'Mon - Sat: 10:00 AM - 7:30 PM',
  
  socials: {
    instagram: 'https://www.instagram.com/arinteriornoida/',
    linkedin: 'https://www.linkedin.com/company/arinteriorsnoida',
    pinterest: 'https://www.pinterest.com/arinteriornoida/',
    x: 'https://x.com/arinteriornoida',
    twitter: 'https://x.com/arinteriornoida',
  },

  getWhatsappUrl: (customMessage) => {
    const defaultMsg = 'Hello AR Interiors, I would like to consult regarding interior design & architecture for my property.';
    const msg = customMessage || defaultMsg;
    return 'https://wa.me/918585951135?text=' + encodeURIComponent(msg);
  }
};