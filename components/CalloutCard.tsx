"use client";

import { CheckCircleIcon, ExclamationCircleIcon } from "@heroicons/react/16/solid";
import { Callout } from "@tremor/react";

type Props = {
    message: string,
    warning?: boolean
}

function CalloutCard({message, warning}: Props) {
    return (
        <Callout
            className="mt-4"
            title={message}
            icon={warning ? ExclamationCircleIcon : CheckCircleIcon}
            color={warning ? "rose" : "teal"}
        />
    )
}

export default CalloutCard;