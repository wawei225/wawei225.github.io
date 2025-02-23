# -*- coding: utf-8 -*-

import numpy as np
import scipy.stats as stats


def check_equal_variance(sample1, sample2 ,alpha = 0.05 ):
    _, p_value = stats.levene(sample1, sample2)
    return p_value >= alpha
  
def check_srm(n_AA, n_A, n_B, ratio_AA, ratio_A, ratio_B):
    """
    Check for Sample Ratio Mismatch (SRM) using a chi-square test.

    Parameters:
    - n_AA: Observed user count in AA group
    - n_A: Observed user count in A group
    - n_B: Observed user count in B group

    Returns:
    - Dictionary containing chi-square statistic, p-value, expected counts, and SRM status
    """
    # Total users
    N = n_AA + n_A + n_B

    # Expected count assuming equal distribution
    expected = [N * ratio_AA, N * ratio_A, N * ratio_B]
    observed = [n_AA, n_A, n_B]

    # Perform chi-square test
    chi2_stat, p_value = stats.chisquare(f_obs=observed, f_exp=expected)

    # Determine if there is a significant SRM
    srm_detected = p_value < 0.05

    return {
        'Observed Counts': {'AA': n_AA, 'A': n_A, 'B': n_B},
        'Expected Counts': {'AA': expected[0], 'A': expected[1], 'B': expected[2]},
        'Chi-Square Statistic': chi2_stat,
        'p-value': p_value,
        'SRM Detected': srm_detected
    }
#%
def z_test_proportions(x_A, n_A, x_B, n_B, alpha=0.05):
    """
    Perform a two-proportion z-test for comparing conversion rates (CTR) between two groups.
    
    Parameters:
    - x_A: Number of converted users in Control
    - n_A: Total users in Control
    - x_B: Number of converted users in Test
    - n_B: Total users in Test
    - alpha: Significance level (default = 0.05)

    Returns:
    - Dictionary containing Z-score, p-value, confidence interval, and test result
    """
    # Compute proportions
    p_A = x_A / n_A
    p_B = x_B / n_B

    # Compute pooled proportion
    p_pool = (x_A + x_B) / (n_A + n_B)

    # Compute standard error
    SE = np.sqrt(p_pool * (1 - p_pool) * (1/n_A + 1/n_B))

    # Compute z-score
    Z = (p_B - p_A) / SE

    # Compute two-tailed p-value
    p_value = 2 * (1 - stats.norm.cdf(abs(Z)))

    # Confidence interval (95%)
    z_critical = stats.norm.ppf(1 - alpha/2)  # 1.96 for 95% CI
    margin_of_error = z_critical * SE
    confidence_interval = ((p_B - p_A) - margin_of_error, (p_B - p_A) + margin_of_error)

    # Determine significance
    is_significant = p_value < alpha

    return {
        'CTR_A': p_A,
        'CTR_B': p_B,
        'CTR_Difference': p_B - p_A,
        'Z-score': Z,
        'p-value': p_value,
        '95% CI': confidence_interval,
        'is_significant': is_significant
    }
  
  
def t_test(sample1, sample2 , significant_level = .05):
    equal_var = check_equal_variance(sample1, sample2) 
    t_stat, p_value = stats.ttest_ind(sample1, sample2, equal_var=equal_var)
    is_significant = p_value < significant_level
    return {'t_stat':t_stat, 
            'p_value':p_value, 
            'is_significant':is_significant}

def z_test( sample1, sample2 , significant_level = .05):
    sample1_mean = np.mean(sample1)
    sample2_mean = np.mean(sample2)
    sample1_std = np.std(sample1, ddof=1)  # ddof=1 for sample standard deviation
    sample2_std = np.std(sample2, ddof=1)
    n1 = len(sample1)
    n2 = len(sample2)
    # Calculate z-score
    se = np.sqrt((sample1_std**2 / n1) + (sample2_std**2 / n2))
    z_stat = (sample2_mean - sample1_mean) / np.sqrt((sample1_std**2 / n1) + (sample2_std**2 / n2))
    # Calculate p-value
    p_value = 2 * (1 - stats.norm.cdf(abs(z_stat)))
    diff_ = sample2_mean - sample1_mean
    is_significant = p_value < significant_level
    return {'group_1_mean':sample1_mean ,
            'group_2_mean':sample2_mean  ,
            'mean_diff' : diff_,
            'z_stat':z_stat, 
            'p_value':p_value, 
            'is_significant':is_significant , 
            'se':se}

def chi_square_test( observed, expected=None , significant_level = .05):
    chi2_stat, p_value = stats.chisquare(observed, f_exp=expected)
    is_significant = p_value < significant_level
    return {'chi2_stat':chi2_stat, 
            'p_value':p_value, 
            'is_significant':is_significant}