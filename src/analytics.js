import ReactGA from "react-ga4";

const TRACKING_ID = "G-5FL9FTFQC7"; // Reemplázalo con tu ID de Google Analytics

export const initializeAnalytics = () => {
  ReactGA.initialize(TRACKING_ID);
};

export const trackPageView = (page) => {
  ReactGA.send({ hitType: "pageview", page });
};

export const trackEvent = (category, action) => {
  ReactGA.event({ category, action });
};
