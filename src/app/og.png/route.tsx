import { ImageResponse } from '@takumi-rs/image-response';
import { appName } from '@/lib/layout.shared';

export const dynamic = 'force-static';

export function GET() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        padding: '0 96px',
        gap: 72,
        color: '#EAEAEA',
        backgroundColor: '#0b0b0c',
        backgroundImage:
          'radial-gradient(circle at 85% 15%, rgba(109,60,160,0.6), rgba(11,11,12,0) 55%)',
      }}
    >
      <svg width="168" height="240" viewBox="0 0 35 50" fill="none">
        <path
          d="M2.5 0C3.88071 0 5 1.11929 5 2.5V6.50391C8.17634 3.26212 12.6029 1.25 17.5 1.25C27.165 1.25 35 9.08502 35 18.75C35 28.415 27.165 36.25 17.5 36.25C12.6027 36.25 8.17638 34.2372 5 30.9951V47.5C5 48.8807 3.88071 50 2.5 50C1.11929 50 0 48.8807 0 47.5V2.5C0 1.11929 1.11929 0 2.5 0ZM17.5 6.25C10.5964 6.25 5 11.8464 5 18.75C5.17093 25.5046 10.7042 31.25 17.5 31.25C24.4036 31.25 30 25.6536 30 18.75C30 11.8464 24.4036 6.25 17.5 6.25Z"
          fillRule="evenodd"
          clipRule="evenodd"
          fill="#EAEAEA"
        />
      </svg>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <div style={{ fontSize: 78, fontWeight: 700, lineHeight: 1.05 }}>
          {appName}
        </div>
        <div style={{ fontSize: 44, color: '#b99ddb' }}>
          DevOps &amp; Cloud Engineer
        </div>
        <div style={{ fontSize: 28, color: '#9a9aa2' }}>
          Kubernetes · Infrastructure as Code · CI/CD
        </div>
      </div>
    </div>,
    { width: 1200, height: 630 },
  );
}
