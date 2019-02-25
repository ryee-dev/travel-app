import React from 'react';
import PageShell from './components/PageShell';
import EventDetailsPageHeader from './components/eventDetailsPage/EventDetailsPageHeader';
import EventDetailsPageBody from './components/eventDetailsPage/EventDetailsPageBody';

const EventDetailsPage = () => (
  <PageShell
    headerContent={<EventDetailsPageHeader />}
    bodyContent={<EventDetailsPageBody />}
  />
);

export default EventDetailsPage;
