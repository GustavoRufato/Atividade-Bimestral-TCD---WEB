const components = [
    { tag: 'custom-header', file: '/views/components/header.html' },
    { tag: 'custom-footer', file: '/views/components/footer.html' },
    { tag: 'custom-sidebar', file: '/views/components/sidebar.html' },
  ];
  
  components.forEach(component => {
    class CustomComponent extends HTMLElement {
      constructor() {
        super();
        this.attachShadow({ mode: 'open' }); 
      }
  
      async connectedCallback() {
        const response = await fetch(component.file); 
        const html = await response.text();
        this.shadowRoot.innerHTML = html; 
      }
    }
  
    customElements.define(component.tag, CustomComponent);
  });
  