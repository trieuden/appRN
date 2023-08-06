import React, { useState } from 'react';
import CalendarStyles from '../css/CalenderStyle';
export const CalendarAction = () => {
    const [activeTab, setActiveTab] = useState("month");

    const handlePress = (tab) => {
        setActiveTab(tab);
    };

    const monthTextStyle = activeTab === "month" ? CalendarStyles.activeTabText : null;
    const yearTextStyle = activeTab === "year" ? CalendarStyles.activeTabText : null;

    return {
        handlePress,
        monthTextStyle,
        yearTextStyle,
    };
}
