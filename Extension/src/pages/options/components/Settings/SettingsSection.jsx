import React from 'react';
import classNames from 'classnames';

const SettingsSection = (props) => {
    const {
        title,
        description,
        renderBackButton,
        inlineControl,
        children,
        disabled,
        mode,
    } = props;

    const settingGroupClassName = classNames('settings__group', {
        'settings__group--disabled': disabled,
    });

    const titleContainerClass = classNames('title__container', {
        'title__container--small': renderBackButton || mode === 'smallContainer',
        'title__container--sub': mode === 'subTitle',
    });

    const titleClass = classNames('title', {
        'title--back-btn': renderBackButton,
        'title--sub': mode === 'subTitle',
    });

    return (
        <div className={settingGroupClassName} key={title}>
            <div className={titleContainerClass}>
                {renderBackButton?.()}
                <div className="title__inner">
                    {title && <h2 className={titleClass}>{title}</h2>}
                    {description && <div className="title__desc">{description}</div>}
                </div>
                {inlineControl
                && (
                    <div
                        className="setting__container setting__container--inline setting__inline-control"
                    >
                        {inlineControl}
                    </div>
                )}
            </div>
            <div>
                {children}
            </div>
        </div>
    );
};

export { SettingsSection };