// test-utils.js
import React from 'react';
import { render } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';
import { SearchProvider } from '../context/SearchContext';
import { AuthProvider } from '../context/AuthContext';
import { PageCountProvider } from '../context/PageCountContext';

const AllTheProviders = (page) => {
  return render(
    <BrowserRouter>
      <AuthProvider>
        <SearchProvider>
          <PageCountProvider>
            {page}
          </PageCountProvider>
        </SearchProvider>
      </AuthProvider> 
    </BrowserRouter>
    
  );
}

// re-export everything
export * from '@testing-library/react';

// override render method
export { AllTheProviders as render }
