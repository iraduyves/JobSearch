import React from 'react'
import { View, Text, TouchableOpacity, ActivityIndicator, RefreshControl, SafeAreaView, ScrollView } from "react-native";
import { Stack, useRouter, useLocalSearchParams, useSearchParams } from 'expo-router';
import { useCallback, useState } from 'react';

import { Company, JobAbout, JobFooter, JobTabs, ScreenHeaderBtn, Specifics } from "../../components"
import { COLORS, icons, SIZES } from '../../constants';
import useFetch from '../../hook/userFetch';

const tabs = ["About", "Qualification", "Responsibilities"]

export const JobDetails = () => {
    const params = useSearchParams();
    const router = useRouter();
    const { data, isLoading, error, refetch } = useFetch('job-details', { job_id: params.id })

    const [refreching, SetRefreching] = useState(false)
    const [activeTab, SetActiveTab] = useState(tabs[0])

    const onRefresh = () => {

    }

    const displayTabContent = () => {
        switch (activeTab) {
            case "Qualification":
                return <Specifics
                    title="Qualification"
                    points={data[0].job_highlights?.Qualifications ?? ['N/A']}
                />
            case "About":
                return <JobAbout
                    info={data[0].job_description ?? "No data provided"}
                />
            case "Responsibilities":
                return <Specifics
                    title="Responsibilities"
                    points={data[0].job_highlights?.Responsibilities ?? ['N/A']}
                />
            default:
                break;
        }
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: false,
                    headerBackVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn
                            iconUrl={icons.left}
                            dimension="60%"
                            handlePress={() => router.back()}
                        />),
                    headerRight: () => (
                        <ScreenHeaderBtn
                            iconUrl={icons.share}
                            dimension="60%"

                        />),
                    headerTitle: ''
                }}
            />
            <>
                <ScrollView showsVerticalScrollIndicator={false} refreshControl={<RefreshControl refreshing={refreching} onRefresh={onRefresh} />}>
                    {isLoading ? (
                        <ActivityIndicator size="large" color={COLORS.primary} />
                    ) : error ? (
                        <Text>Something Went Wrong</Text>
                    ) : data.length === 0 ? (
                        <Text>No data</Text>
                    ) : (
                        <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
                            <Company
                                companylogo={data[0].employer_logo}
                                jobTitle={data[0].job_title}
                                CompanyName={data[0].employer_name}
                                location={data[0].job_country}
                            />
                            <JobTabs
                                tabs={tabs}
                                activeTab={activeTab}
                                SetActiveTab={SetActiveTab}
                            />

                            {displayTabContent()}

                        </View>
                    )}
                </ScrollView>
                <JobFooter url={data[0]?.job_google_link ?? 'https://Careers.google.com/jobs/results'}/>
            </>
        </SafeAreaView>
    )
}

export default JobDetails