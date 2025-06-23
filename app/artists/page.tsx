import ArtistsPage from "@/components/artist-page";
import React, { Suspense } from "react";

const ArtistPageWrapper = () => {
  return (
    <Suspense>
      <ArtistsPage />
    </Suspense>
  );
};

export default ArtistPageWrapper;
