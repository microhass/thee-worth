import { useParams } from 'react-router-dom';

const CompanyDetails = () => {
  const { companyCode } = useParams();

  return <div>CompanyDetails</div>;
};

export default CompanyDetails;
