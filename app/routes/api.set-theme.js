import { json } from '@remix-run/cloudflare';
import { TableClient } from '@azure/data-tables';

export async function action({ request, context }) {
  const formData = await request.formData();
  const theme = formData.get('theme');

  const tableClient = TableClient.fromConnectionString(
    context.azure.env.AZURE_TABLE_CONNECTION_STRING,
    'sessions'
  );

  const sessionId = request.headers.get('Cookie')?.split('=')[1];
  const sessionEntity = await tableClient.getEntity('session', sessionId);
  sessionEntity.theme = theme;
  await tableClient.updateEntity(sessionEntity);

  return json(
    { status: 'success' },
    {
      headers: {
        'Set-Cookie': `session=${sessionId}; Path=/; HttpOnly; SameSite=Lax; Max-Age=604800`,
      },
    }
  );
}
