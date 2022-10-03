import { GetServerSideProps } from 'next';

export default function Page() {
  return null;
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const address = ctx.query.address as string;
  const chain = ctx.query.chain as string

  return {
    redirect: {
      // TODO: Search for the contract across different EVM networks
      destination: `/${chain}/${address}`,
      permanent: true,
    },
  };
};
