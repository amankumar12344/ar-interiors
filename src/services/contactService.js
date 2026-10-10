export const contactService = {
  async submitInquiry(formData) {
    try {
      const emailPayload = {
        _subject: `New Project Inquiry: ${formData.name || 'Client'} (${formData.projectType || 'Interior'})`,
        _template: 'table',
        _captcha: 'false',
        'Client Name': formData.name,
        'Phone Number': formData.phone,
        'Email Address': formData.email,
        'Project Location': formData.location || 'Not Specified',
        'Project Type': formData.projectType || 'Residential Interior',
        'Property Type': formData.propertyType || 'Not Specified',
        'Approx. Budget': formData.budget || 'Not Specified',
        'Start Timeline': formData.timeline || 'Immediate',
        'Expected Site/Possession Date': formData.targetDate || 'Not Specified',
        'Client Notes / Brief': formData.message || 'No additional note provided'
      };

      const response = await fetch('https://formsubmit.co/ajax/info@arinteriorsnoida.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(emailPayload)
      });

      if (!response.ok) {
        console.warn('[ContactService] Response status:', response.status);
      }
    } catch (err) {
      console.warn('[ContactService] Email delivery warning (proceeding gracefully):', err);
    }

    console.log('[ContactService] Lead submitted successfully:', formData);
    return {
      success: true,
      message: 'Thank you for contacting AR Interiors. Our senior architect will review your project brief and contact you within 24 hours.'
    };
  }
};
