import { createContext, useContext, useState } from 'react';

const OnboardingContext = createContext();

export const OnboardingProvider = ({ children }) => {
  const [cognitoData, setCognitoData] = useState({});
  const [dynamoData, setDynamoData] = useState({});

  return (
    <OnboardingContext.Provider value={{ cognitoData, setCognitoData, dynamoData, setDynamoData }}>
      {children}
    </OnboardingContext.Provider>
  );
};

export const useOnboarding = () => useContext(OnboardingContext);
