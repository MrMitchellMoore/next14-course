'use client';

import { useSearchParams, useParams } from 'next/navigation';

export default function AccountID() {
  const searchParams = useSearchParams();
  const param = useParams();
  const newParam = searchParams.get('name');
  console.log(newParam);
  return (
    <div>
      Account ID: {param.id} and name is: {newParam}
    </div>
  );
}

// export default function AccountID({ params, searchParams }: any) {
//   return (
//     <div>
//       {params.id} also query: {searchParams.name}
//     </div>
//   );
// }
