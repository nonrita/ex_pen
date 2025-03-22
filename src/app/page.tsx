import Form from './components/form';

export default function Home() {
  return (
    <>
      <main className="bg-red-300 w-[calc((5/7*100%)-104px)] ml-24 mt-4">
        <h1>みんなの生活費</h1>
      </main>
      <fieldset className="border-4 border-amber-400 bg-white rounded-xl w-[calc((2/7*100%)-104px)] py-2 px-4 absolute top-16 right-24">
        <legend className="font-bold px-3">生活費を投稿</legend>
        <Form></Form>
      </fieldset>
    </>
  );
}
