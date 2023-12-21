import { getTranslations } from 'next-intl/server';

import { DeleteGuestbookEntry } from '@/components/DeleteGuestbookEntry';
import { EditableGuestbookEntry } from '@/components/EditableGuestbookEntry';
import { GuestbookForm } from '@/components/GuestbookForm';
import { db } from '@/libs/DB';
import { guestbookSchema } from '@/models/Schema';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: 'Guestbook' });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

const Guestbook = async () => {
  const guestbook = await db.select().from(guestbookSchema).all();
  // const t = await getTranslations('Guestbook');

  return (
    <>
      <GuestbookForm />

      <div className="mt-5">
        {guestbook.map((elt) => (
          <div key={elt.id} className="mb-1 flex items-center gap-x-1">
            <DeleteGuestbookEntry id={elt.id} />

            <EditableGuestbookEntry
              id={elt.id}
              username={elt.username}
              body={elt.body}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export const dynamic = 'force-dynamic';

export default Guestbook;
