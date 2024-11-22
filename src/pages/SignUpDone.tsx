import { css } from '@emotion/react';
import profileImg from '@/assets/images/default-profile.png';
import Button from '@/components/Button';
import { FONT_SIZE, FONT_WEIGHT } from '@/constants/font';

const SignUpDone = () => (
  <div css={wrapperStyle}>
    <div css={profileDivStyle}>
      <img src={profileImg} alt='my-profile' />
    </div>
    <div css={contentsDivStyle}>
      <h2>축하합니다. Sysmetic 회원가입이 완료되었습니다!</h2>
      <p>
        Sysmetic과 함께 투자하는 전략들을 만나보세요. <br />
        좋은 전략을 Follow 하고, 문의하기를 통해 직접 트레이더에게 문의하실 수
        있습니다.
      </p>
    </div>
    <div css={buttonDivStyle}>
      <Button
        border={true}
        width={120}
        label='메인가기'
        handleClick={() => console.log('메인가기')}
      />
      <Button
        width={120}
        label='로그인'
        handleClick={() => console.log('로그인')}
      />
    </div>
  </div>
);

const wrapperStyle = css`
  width: 100%;
  height: 100%;
  max-width: 1200px;
  padding: 0 10px;
  margin: 0 auto;
  letter-spacing: -0.4px;
  display: flex;
  flex-direction: column;
`;

const profileDivStyle = css`
  width: 300px;
  height: 300px;
  margin: 96px auto 0;
  border-radius: 300px;
  font-size: ${FONT_SIZE.TITLE_LG};
  letter-spacing: -0.72px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const contentsDivStyle = css`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 12px;
  margin-top: 40px;

  h2 {
    font-size: ${FONT_SIZE.TITLE_XS};
    font-weight: ${FONT_WEIGHT.BOLD};
  }

  p {
    line-height: 160%;
    letter-spacing: -0.32px;
  }
`;

const buttonDivStyle = css`
  display: flex;
  margin: 80px auto 96px;
  gap: 16px;
`;

export default SignUpDone;
