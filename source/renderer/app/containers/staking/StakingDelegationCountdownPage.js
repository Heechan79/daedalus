// @flow
import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import StakingDelegationCountdown from '../../components/staking/delegation-countdown/StakingDelegationCountdown';
import type { InjectedProps } from '../../types/injectedPropsType';

type Props = InjectedProps;

@inject('stores', 'actions')
@observer
export default class StakingDelegationCountdownPage extends Component<Props> {
  static defaultProps = { actions: null, stores: {} };

  render() {
    const { stores, actions } = this.props;
    const { profile, staking } = stores;
    const {
      staking: { goToStakingInfo },
    } = actions;
    const redirectToStakingInfo = goToStakingInfo.trigger;

    return (
      <StakingDelegationCountdown
        redirectToStakingInfo={redirectToStakingInfo}
        currentLocale={profile.currentLocale}
        startDateTime={staking.startDateTime}
      />
    );
  }
}