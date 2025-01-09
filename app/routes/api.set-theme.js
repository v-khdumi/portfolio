import { json } from '@remix-run/node';
import { DefaultAzureCredential } from '@azure/identity';
import { SecretClient } from '@azure/keyvault-secrets';

export async function action({ request }) {
  const formData = await request.formData();
  const theme = formData.get('theme');

  const credential = new DefaultAzureCredential();
  const vaultName = process.env.AZURE_KEY_VAULT_NAME;
  const url = `https://${vaultName}.vault.azure.net`;
  const client = new SecretClient(url, credential);

  const sessionSecret = await client.getSecret('SESSION_SECRET');

  const session = {
    theme,
    secret: sessionSecret.value,
  };

  return json(
    { status: 'success' },
    {
      headers: {
        'Set-Cookie': `__session=${JSON.stringify(session)}; HttpOnly; Max-Age=604800; Path=/; SameSite=Lax; Secure`,
      },
    }
  );
}
