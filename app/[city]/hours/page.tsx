interface Hours {
  params: {
    city: string;
  };
}

export default function Hours({ params }: Hours) {
  const city = params.city;

  return (
    <main>
      <h1>{city} timme för timme</h1>
    </main>
  );
}
