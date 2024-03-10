export type NextPageProps<P extends string, S extends string = string> = {
  params: {
    [key in P]: string;
  };
  searchParams: {
    [key in S]: string;
  };
};
