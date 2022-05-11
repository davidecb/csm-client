import * as PropTypes from 'prop-types';
import * as React from 'react';

interface ExternalWebSiteProps {
  url: string;
}

export const ExternalWebSite: React.FC<ExternalWebSiteProps> = ({ url }) => <iframe src={url} width='100%' height='100%'></iframe>;

ExternalWebSite.propTypes = {
  url: PropTypes.string.isRequired,
};
