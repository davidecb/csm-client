import * as React from 'react';
import { RenderResult, render } from '@testing-library/react';
import { SinonStub, stub } from 'sinon';
import { ExternalWebSite } from './../ExternalWebSite';

describe('ExternalWebSite Test', () => {
  let componentWrapper: RenderResult;
  let componentProps: React.ComponentProps<typeof ExternalWebSite> & {
    
  };

  beforeEach(() => {
    componentProps = {
      url: 'example.com'
    };
    componentWrapper = render(<ExternalWebSite {...componentProps} />);
  });

  it('should match snapshot', () => {
    expect(componentWrapper.container).toMatchSnapshot();
  });
});

export {};
