import { ImageResponse } from 'next/og'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#F8F2E6',
        }}
      >
        <div
          style={{
            width: 320,
            height: 320,
            borderRadius: '50%',
            border: '1.5px solid #B0813F',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              width: 276,
              height: 276,
              borderRadius: '50%',
              border: '1px solid #B0813F',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'Georgia, serif',
              fontSize: 72,
              letterSpacing: 8,
              color: '#8C6529',
            }}
          >
            A · B
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
