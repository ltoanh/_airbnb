import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "next/head";
import { useRouter } from "next/router";
import { format } from "date-fns";
import Image from "next/image";
import InfoCard from "../components/InfoCard";

function Search({ searchResults }) {
  const router = useRouter();
  const { location, startDate, endDate, noOfGuests } = router.query;

  // format date
  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <>
      <Head>
        <title>Search</title>
      </Head>
      <Header input_value={`${location} | ${range} | ${noOfGuests} guests`} />

      <main className="flex">
        {/* left */}
        <section className="flex-grow py-14 px-6">
          <p className="text-xs">
            300+ stay • {range} • for {noOfGuests} guest
          </p>
          <h2 className="text-xl font-semibold mt-2 mb-5">
            Stay in {location}
          </h2>

          <div className="hidden md:flex mb-5 space-x-3 text-xs text-gray-800 whitespace-nowrap">
            <p className="btn-hashtag">Cancellation Flexibility</p>
            <p className="btn-hashtag">Type of place</p>
            <p className="btn-hashtag">Price</p>
            <p className="btn-hashtag">Rooms and Beds</p>
            <p className="btn-hashtag">More filters</p>
          </div>

          {
            searchResults.map((item, id) => (
              <InfoCard key={id} item={item}/>
            ))
          }
        </section>

        {/* right */}
        <section className="hidden lg:block flex-grow">left</section>
      </main>

      <Footer />
    </>
  );
}

export default Search;

export async function getServerSideProps() {
  const searchResults = await fetch("https://links.papareact.com/isz").then(
    (res) => res.json()
  );

  return {
    props: {
      searchResults,
    },
  };
}
