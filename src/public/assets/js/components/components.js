const base = [
    // { tag: 'layout', file: '/views/base/components/layout.html' },
    { tag: 'custom-header', file: '/views/base/components/header.html' },
    { tag: 'custom-footer', file: '/views/base/components/footer.html' },
    { tag: 'custom-sidebar', file: '/views/base/components/sidebar.html' },
]

const components = [
    
  ];
  
  base.forEach(component => {
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
  