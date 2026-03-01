// ================================================
// BiasLens — Analysis Engine & UI Controller
// ================================================

// =============================================
// ANALYSIS ENGINE
// =============================================
class AnalysisEngine {
    constructor() {
        // ---- Emotion keyword dictionaries ----
        this.emotionKeywords = {
            fear: ['terrifying', 'alarming', 'crisis', 'dangerous', 'threat', 'deadly', 'scared', 'panic', 'chaos', 'catastrophe', 'devastating', 'nightmare', 'horror', 'dread', 'peril', 'menace', 'dire', 'grim', 'ominous', 'looming', 'doomed', 'collapse', 'destruction', 'ruin', 'havoc', 'plague', 'epidemic', 'emergency', 'disastrous', 'grave', 'chilling', 'harrowing', 'bleak', 'sinister'],
            anger: ['outrageous', 'disgraceful', 'infuriating', 'shameful', 'appalling', 'scandalous', 'unacceptable', 'condemn', 'denounce', 'fury', 'rage', 'betrayal', 'corrupt', 'crooked', 'disgust', 'despicable', 'vile', 'reprehensible', 'abhorrent', 'atrocious', 'heinous', 'monstrous', 'inexcusable', 'intolerable'],
            hope: ['promising', 'optimistic', 'breakthrough', 'progress', 'inspiring', 'transformative', 'remarkable', 'historic', 'hopeful', 'uplifting', 'visionary', 'exciting', 'renewed', 'opportunity', 'milestone', 'bright', 'flourishing', 'revival', 'triumph', 'empowering', 'encouraging'],
            pride: ['patriotic', 'proud', 'heritage', 'glory', 'honor', 'brave', 'heroic', 'courageous', 'valiant', 'noble', 'triumphant', 'legacy', 'distinguished', 'celebrated', 'exemplary', 'pioneering', 'admirable'],
            outrage: ['shocking', 'unbelievable', 'absurd', 'ridiculous', 'insane', 'crazy', 'outrage', 'travesty', 'mockery', 'farce', 'sham', 'preposterous', 'ludicrous', 'grotesque', 'obscene', 'travesty'],
            sympathy: ['heart-breaking', 'tragic', 'suffering', 'victims', 'vulnerable', 'innocent', 'desperate', 'plight', 'devastated', 'grief', 'sorrow', 'compassion', 'heartfelt', 'anguish', 'tormented', 'forsaken'],
            urgency: ['immediately', 'urgent', 'critical', 'now', 'must', 'demand', 'before it\'s too late', 'running out of time', 'act now', 'emergency', 'crucial', 'imperative', 'pressing', 'vital', 'time-sensitive', 'without delay', 'rapidly'],
            moralSuperiority: ['everyone knows', 'obviously', 'clearly', 'any reasonable person', 'common sense', 'no sane person', 'right-thinking', 'decent people', 'moral duty', 'conscience', 'righteous', 'virtuous', 'enlightened', 'principled']
        };

        // ---- Loaded language patterns ----
        this.loadedLanguagePatterns = {
            absolutist: {
                words: ['always', 'never', 'every', 'all', 'none', 'nobody', 'everyone', 'completely', 'totally', 'absolutely', 'entirely', 'utterly', 'forever', 'impossible', 'undeniable', 'unquestionable', 'irrefutable', 'indisputable', 'categorically', 'invariably', 'without exception', 'no chance'],
                severity: 'Medium'
            },
            demonizing: {
                words: ['radical', 'extremist', 'terrorist', 'fascist', 'communist', 'socialist', 'thug', 'mob', 'invasion', 'regime', 'puppet', 'tyrant', 'dictator', 'despot', 'traitor', 'enemy of the people', 'elitist', 'globalist', 'anarchist', 'zealot', 'fanatic', 'fundamentalist', 'demagogue', 'warmonger'],
                severity: 'High'
            },
            valueLoaded: {
                words: ['disastrous', 'catastrophic', 'devastating', 'brilliant', 'spectacular', 'heroic', 'cowardly', 'reckless', 'irresponsible', 'visionary', 'corrupt', 'courageous', 'shameful', 'glorious', 'pathetic', 'magnificent', 'deplorable', 'despicable', 'noble', 'treacherous', 'incompetent', 'genius', 'idiotic'],
                severity: 'Medium'
            },
            emotionTrigger: {
                words: ['slaughter', 'massacre', 'bloodbath', 'nightmare', 'paradise', 'miracle', 'hell', 'savior', 'doom', 'plague', 'crusade', 'jihad', 'witch hunt', 'tsunami', 'avalanche', 'firestorm', 'bombshell', 'explosive', 'toxic', 'cancer', 'virus', 'poison', 'epidemic'],
                severity: 'High'
            },
            speculative: {
                words: ['could potentially', 'some say', 'many believe', 'experts warn', 'sources claim', 'insiders suggest', 'rumored', 'alleged', 'supposedly', 'perhaps', 'might', 'possibly', 'it is believed', 'there are concerns', 'speculation', 'unconfirmed reports', 'according to sources'],
                severity: 'Low'
            }
        };

        // ---- Political keyword dictionaries ----
        this.politicalKeywords = {
            left: ['progressive', 'social justice', 'inequality', 'systemic', 'marginalized', 'privilege', 'diversity', 'equity', 'inclusion', 'oppression', 'patriarchy', 'intersectionality', 'universal healthcare', 'wealth gap', 'living wage', 'climate crisis', 'gun control', 'reproductive rights', 'racial justice', 'corporate greed', 'working class', 'union', 'collective bargaining', 'regulation', 'public option', 'universal basic income', 'green new deal', 'defund', 'reparations', 'colonialism', 'imperialism'],
            right: ['traditional values', 'law and order', 'free market', 'individual liberty', 'deregulation', 'small government', 'fiscal responsibility', 'taxpayer', 'patriot', 'constitutional', 'second amendment', 'border security', 'illegal immigration', 'family values', 'religious freedom', 'national security', 'personal responsibility', 'hard-working', 'merit-based', 'capitalism', 'free enterprise', 'sovereignty', 'states rights', 'pro-life', 'tough on crime', 'welfare reform', 'deep state', 'mainstream media bias', 'political correctness', 'cancel culture', 'woke']
        };

        // ---- Propaganda technique patterns ----
        this.propagandaPatterns = {
            fearAppeal: {
                name: 'Fear Appeal',
                patterns: ['if we don\'t', 'will destroy', 'will collapse', 'end of', 'death of', 'threat to our', 'at risk', 'under attack', 'losing our', 'never recover', 'point of no return', 'ticking time bomb'],
                description: 'Using fear to persuade rather than rational argument'
            },
            strawman: {
                name: 'Strawman Argument',
                patterns: ['they want to', 'they believe that all', 'they think we should just', 'their plan is to', 'what they\'re really saying', 'so basically they want', 'in other words they'],
                description: 'Misrepresenting an opponent\'s argument to make it easier to attack'
            },
            falseDilemma: {
                name: 'False Dilemma',
                patterns: ['either we', 'or we will', 'the only option', 'no choice but', 'only two options', 'must choose between', 'it\'s either', 'there is no alternative', 'the only way', 'if not this then'],
                description: 'Presenting only two options when more exist'
            },
            bandwagon: {
                name: 'Bandwagon',
                patterns: ['everyone agrees', 'most people', 'the majority', 'growing number', 'widespread support', 'consensus', 'polls show', 'no one disputes', 'increasingly', 'mounting evidence', 'the public demands', 'ordinary people'],
                description: 'Appealing to popularity rather than evidence'
            },
            adHominem: {
                name: 'Ad Hominem Attack',
                patterns: ['incompetent', 'unfit', 'corrupt', 'liar', 'hypocrite', 'naive', 'out of touch', 'elitist', 'career politician', 'failed', 'disgraced', 'discredited', 'self-serving', 'power-hungry'],
                description: 'Attacking the person rather than their argument'
            },
            glitteringGenerality: {
                name: 'Glittering Generality',
                patterns: ['freedom', 'democracy', 'justice', 'values', 'the people', 'our children', 'future generations', 'the american dream', 'progress', 'unity', 'hope and change', 'make .* great', 'for the people', 'the greater good'],
                description: 'Using virtue words that mean different things to different people'
            },
            whataboutism: {
                name: 'Whataboutism',
                patterns: ['what about', 'but when they', 'but they also', 'where were they when', 'hypocritical because', 'but the other side', 'double standard', 'why didn\'t they', 'but under their'],
                description: 'Deflecting criticism by pointing to others\' faults'
            },
            slipperySlope: {
                name: 'Slippery Slope',
                patterns: ['will lead to', 'next they\'ll', 'slippery slope', 'where does it end', 'opens the door', 'paves the way', 'first they came', 'what\'s next', 'before you know it', 'the beginning of the end', 'it won\'t stop'],
                description: 'Arguing one event will inevitably lead to extreme consequences'
            }
        };
    }

    // =====================
    // MAIN ANALYSIS ENTRY
    // =====================
    analyze(text) {
        if (!text || text.trim().length === 0) return null;
        const cleanText = text.trim();
        const wordCount = this._countWords(cleanText);
        const isSectional = wordCount > 1200;
        const isShort = wordCount < 300;

        let result;
        if (isSectional) {
            result = this._sectionalAnalysis(cleanText);
            result.sectionalApplied = true;
        } else {
            result = this._analyzeSection(cleanText);
            result.sectionalApplied = false;
        }

        result.wordCount = wordCount;
        result.shortArticle = isShort;
        if (isShort) {
            result.confidence_percentage = Math.min(result.confidence_percentage, 50);
        }

        return result;
    }

    // =====================
    // SECTIONAL ANALYSIS
    // =====================
    _sectionalAnalysis(text) {
        const sections = this._splitIntoSections(text);
        const sectionResults = sections.map((s, i) => ({
            sectionIndex: i,
            label: i === 0 ? 'Introduction' : i === sections.length - 1 ? 'Conclusion' : `Body Section ${i}`,
            ...this._analyzeSection(s)
        }));

        // Aggregate
        const agg = {
            tone: this._aggregateTone(sectionResults),
            emotional_intensity_score: Math.round(sectionResults.reduce((a, s) => a + s.emotional_intensity_score, 0) / sectionResults.length),
            dominant_emotions: [...new Set(sectionResults.flatMap(s => s.dominant_emotions))],
            loaded_language: sectionResults.flatMap(s => s.loaded_language),
            framing_observations: [...new Set(sectionResults.flatMap(s => s.framing_observations))],
            balance_score: Math.round(sectionResults.reduce((a, s) => a + s.balance_score, 0) / sectionResults.length),
            propaganda_techniques: this._deduplicateTechniques(sectionResults.flatMap(s => s.propaganda_techniques)),
            political_leaning: this._aggregateLeaning(sectionResults),
            confidence_percentage: Math.round(sectionResults.reduce((a, s) => a + s.confidence_percentage, 0) / sectionResults.length),
            suggestions: [...new Set(sectionResults.flatMap(s => s.suggestions))].slice(0, 3),
            sectionScores: sectionResults.map(s => ({ label: s.label, score: s.bias_score }))
        };

        agg.bias_score = this._calculateBiasScore(
            agg.emotional_intensity_score,
            this._avgLoadedSeverity(agg.loaded_language),
            this._avgFraming(agg.framing_observations),
            agg.balance_score,
            this._propagandaScore(agg.propaganda_techniques)
        );
        agg.bias_category = this._biasCategory(agg.bias_score);
        agg.weight_explanation = this._weightExplanation(
            agg.emotional_intensity_score,
            this._avgLoadedSeverity(agg.loaded_language),
            this._avgFraming(agg.framing_observations),
            agg.balance_score,
            this._propagandaScore(agg.propaganda_techniques),
            agg.bias_score
        );

        return agg;
    }

    _splitIntoSections(text) {
        const paragraphs = text.split(/\n\s*\n/).filter(p => p.trim().length > 0);
        if (paragraphs.length <= 3) return paragraphs;

        const sectionSize = Math.ceil(paragraphs.length / 3);
        const sections = [];
        for (let i = 0; i < paragraphs.length; i += sectionSize) {
            sections.push(paragraphs.slice(i, i + sectionSize).join('\n\n'));
        }
        return sections;
    }

    // =====================
    // SINGLE SECTION ANALYSIS
    // =====================
    _analyzeSection(text) {
        const lower = text.toLowerCase();
        const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 2);

        // Step 1: Emotional Tone
        const emotionResult = this._analyzeEmotionalTone(lower, sentences);

        // Step 2: Loaded Language
        const loadedResult = this._detectLoadedLanguage(text, lower);

        // Step 3: Framing
        const framingResult = this._analyzeFraming(text, lower, sentences);

        // Step 4: Balance
        const balanceResult = this._checkBalance(text, lower, sentences);

        // Step 5: Political Leaning
        const leaningResult = this._detectPoliticalLeaning(lower);

        // Step 6: Propaganda
        const propagandaResult = this._detectPropaganda(lower);

        // Step 7: Bias Score
        const emotionScore = emotionResult.intensity;
        const languageScore = this._avgLoadedSeverity(loadedResult.phrases);
        const framingScore = this._avgFraming(framingResult.observations);
        const balanceScore = balanceResult.score;
        const propagandaScore = this._propagandaScore(propagandaResult.techniques);

        const biasScore = this._calculateBiasScore(emotionScore, languageScore, framingScore, balanceScore, propagandaScore);

        return {
            tone: emotionResult.tone,
            emotional_intensity_score: emotionResult.intensity,
            dominant_emotions: emotionResult.emotions,
            loaded_language: loadedResult.phrases,
            framing_observations: framingResult.observations,
            balance_score: balanceScore,
            balance_details: balanceResult.details,
            propaganda_techniques: propagandaResult.techniques,
            political_leaning: leaningResult.leaning,
            confidence_percentage: leaningResult.confidence,
            bias_score: biasScore,
            bias_category: this._biasCategory(biasScore),
            weight_explanation: this._weightExplanation(emotionScore, languageScore, framingScore, balanceScore, propagandaScore, biasScore),
            suggestions: this._generateSuggestions(emotionResult, loadedResult, framingResult, balanceResult),
            component_scores: { emotionScore, languageScore, framingScore, balanceScore: 100 - balanceScore, propagandaScore }
        };
    }

    // =====================
    // STEP 1: EMOTIONAL TONE
    // =====================
    _analyzeEmotionalTone(lower, sentences) {
        const emotionCounts = {};
        let totalHits = 0;

        for (const [emotion, keywords] of Object.entries(this.emotionKeywords)) {
            let count = 0;
            for (const kw of keywords) {
                const regex = new RegExp('\\b' + this._escapeRegex(kw) + '\\b', 'gi');
                const matches = lower.match(regex);
                if (matches) count += matches.length;
            }
            if (count > 0) {
                emotionCounts[emotion] = count;
                totalHits += count;
            }
        }

        const wordCount = lower.split(/\s+/).length;
        const density = (totalHits / Math.max(wordCount, 1)) * 100;
        let intensity = Math.min(100, Math.round(density * 18 + totalHits * 1.5));

        // Check for exclamation density
        const exclamationCount = (lower.match(/!/g) || []).length;
        const capsWordCount = (lower.match(/\b[A-Z]{2,}\b/g) || []).length;
        intensity = Math.min(100, intensity + exclamationCount * 2 + capsWordCount * 1.5);

        let tone;
        if (intensity <= 20) tone = 'Neutral';
        else if (intensity <= 40) tone = 'Slightly Emotional';
        else if (intensity <= 60) tone = 'Emotional';
        else if (intensity <= 80) tone = 'Highly Emotional';
        else tone = 'Highly Emotional';

        // Top emotions
        const sorted = Object.entries(emotionCounts).sort((a, b) => b[1] - a[1]);
        const emotions = sorted.slice(0, 3).map(([e]) => this._capitalize(e));
        if (emotions.length === 0) emotions.push('Neutral');

        return { tone, intensity: Math.round(intensity), emotions };
    }

    // =====================
    // STEP 2: LOADED LANGUAGE
    // =====================
    _detectLoadedLanguage(original, lower) {
        const phrases = [];
        const seen = new Set();

        for (const [category, config] of Object.entries(this.loadedLanguagePatterns)) {
            for (const word of config.words) {
                const regex = new RegExp('\\b' + this._escapeRegex(word) + '\\b', 'gi');
                let match;
                while ((match = regex.exec(original)) !== null) {
                    const context = this._extractContext(original, match.index, 60);
                    const key = word.toLowerCase();
                    if (!seen.has(key)) {
                        seen.add(key);
                        phrases.push({
                            phrase: match[0],
                            context: context,
                            severity: config.severity,
                            reason: this._getLoadedReason(category, match[0])
                        });
                    }
                }
            }
        }

        return { phrases: phrases.slice(0, 15) };
    }

    _getLoadedReason(category, word) {
        const reasons = {
            absolutist: `"${word}" is an absolutist term that eliminates nuance and presents a one-sided view.`,
            demonizing: `"${word}" is a demonizing label that dehumanizes or vilifies the subject.`,
            valueLoaded: `"${word}" is a value-loaded adjective that conveys strong judgment beyond neutral description.`,
            emotionTrigger: `"${word}" is an emotion-triggering term designed to provoke a visceral reaction.`,
            speculative: `"${word}" introduces speculative framing that presents unverified claims as plausible.`
        };
        return reasons[category] || `"${word}" introduces bias through loaded language.`;
    }

    // =====================
    // STEP 3: FRAMING ANALYSIS
    // =====================
    _analyzeFraming(text, lower, sentences) {
        const observations = [];

        // Check headline bias (first sentence/line bias)
        const firstLine = text.split('\n')[0] || '';
        if (this._hasEmotionalWeight(firstLine.toLowerCase())) {
            observations.push('The headline/opening uses emotionally weighted language that may prime reader perception before presenting facts.');
        }

        // One-sided check
        const opposing = ['however', 'on the other hand', 'critics argue', 'supporters say', 'opponents', 'proponents', 'alternatively', 'conversely', 'in contrast', 'nonetheless', 'nevertheless'];
        const opposingCount = opposing.filter(w => lower.includes(w)).length;
        if (opposingCount < 2) {
            observations.push('The article presents predominantly one perspective without adequate counterpoints or opposing viewpoints.');
        }

        // Selective statistics
        const statPatterns = /\d+%|\d+ percent|\d+ out of \d+|according to .{3,30} survey|studies show|research indicates|data shows/gi;
        const stats = lower.match(statPatterns) || [];
        const statSources = /according to|study by|research from|survey by|data from/gi;
        const sourced = lower.match(statSources) || [];
        if (stats.length > 0 && sourced.length < stats.length / 2) {
            observations.push('Statistics are cited without adequate source attribution, making them difficult to verify.');
        }

        // Anecdotal over data
        const anecdotal = /told me|said .{1,20} in an interview|shared .{1,20} story|personal experience|eye-witness|i saw|i felt|i remember/gi;
        const anecdoteMatches = lower.match(anecdotal) || [];
        if (anecdoteMatches.length > 2 && stats.length < 2) {
            observations.push('The article relies heavily on anecdotal evidence rather than data-driven analysis.');
        }

        // Quote imbalance
        const quotes = text.match(/[""]([^""]+)[""]/g) || [];
        if (quotes.length > 3) {
            observations.push('Multiple direct quotes are used, which may create a sense of authority; verify if diverse viewpoints are represented.');
        }

        // Structural influence
        const paraCount = text.split(/\n\s*\n/).filter(p => p.trim()).length;
        if (paraCount >= 4) {
            const firstHalf = sentences.slice(0, Math.floor(sentences.length / 2)).join(' ').toLowerCase();
            const secondHalf = sentences.slice(Math.floor(sentences.length / 2)).join(' ').toLowerCase();
            const firstEmo = this._quickEmotionScore(firstHalf);
            const secondEmo = this._quickEmotionScore(secondHalf);
            if (firstEmo > secondEmo + 10) {
                observations.push('Emotional language is front-loaded, potentially to establish a biased frame before presenting details.');
            } else if (secondEmo > firstEmo + 10) {
                observations.push('Emotional language intensifies toward the conclusion, potentially leaving readers with a biased final impression.');
            }
        }

        if (observations.length === 0) {
            observations.push('The article maintains a relatively balanced structure with no major framing concerns detected.');
        }

        return { observations };
    }

    // =====================
    // STEP 4: BALANCE CHECK
    // =====================
    _checkBalance(text, lower, sentences) {
        let score = 50; // Start neutral
        const details = [];

        // Opposing viewpoints
        const balanceWords = ['however', 'but', 'although', 'on the other hand', 'critics', 'opponents', 'supporters', 'alternatively', 'conversely', 'in contrast', 'nevertheless', 'nonetheless', 'despite', 'while some', 'others argue', 'counter-argument', 'rebut', 'rebuttal'];
        const balanceCount = balanceWords.filter(w => lower.includes(w)).length;
        if (balanceCount >= 4) {
            score += 20;
            details.push('Multiple opposing viewpoints and counterarguments are presented.');
        } else if (balanceCount >= 2) {
            score += 10;
            details.push('Some counterpoints are included but could be more developed.');
        } else {
            score -= 15;
            details.push('Few or no opposing viewpoints are presented.');
        }

        // Source diversity
        const sourcePatterns = /according to|said|stated|reported by|as per|cited by|sources say|officials say|experts say|spokesperson/gi;
        const sourceMatches = lower.match(sourcePatterns) || [];
        if (sourceMatches.length >= 4) {
            score += 15;
            details.push('Multiple sources are cited throughout the article.');
        } else if (sourceMatches.length >= 2) {
            score += 5;
            details.push('Some sources are cited but diversity could improve.');
        } else {
            score -= 10;
            details.push('Few credible sources are cited to support claims.');
        }

        // Claims vs evidence
        const claimWords = ['clearly', 'obviously', 'it is known', 'everyone knows', 'undeniable', 'unquestionable', 'beyond doubt', 'certainly'];
        const unsupportedClaims = claimWords.filter(w => lower.includes(w)).length;
        if (unsupportedClaims > 2) {
            score -= 15;
            details.push('Multiple assertions are made without supporting evidence.');
        } else if (unsupportedClaims > 0) {
            score -= 5;
            details.push('Some claims are asserted without adequate evidence.');
        } else {
            score += 10;
            details.push('Claims generally appear to be supported or qualified.');
        }

        score = Math.max(0, Math.min(100, score));
        return { score: Math.round(score), details };
    }

    // =====================
    // STEP 5: POLITICAL LEANING
    // =====================
    _detectPoliticalLeaning(lower) {
        let leftScore = 0, rightScore = 0;

        for (const kw of this.politicalKeywords.left) {
            const regex = new RegExp('\\b' + this._escapeRegex(kw) + '\\b', 'gi');
            const m = lower.match(regex);
            if (m) leftScore += m.length;
        }
        for (const kw of this.politicalKeywords.right) {
            const regex = new RegExp('\\b' + this._escapeRegex(kw) + '\\b', 'gi');
            const m = lower.match(regex);
            if (m) rightScore += m.length;
        }

        const total = leftScore + rightScore;
        let leaning, confidence;

        if (total === 0) {
            leaning = 'Undetermined';
            confidence = 15;
        } else {
            const ratio = leftScore / total;
            if (ratio > 0.7) {
                leaning = 'Left-Leaning';
                confidence = Math.min(85, 40 + total * 3);
            } else if (ratio > 0.55) {
                leaning = 'Left-Leaning';
                confidence = Math.min(65, 25 + total * 2);
            } else if (ratio < 0.3) {
                leaning = 'Right-Leaning';
                confidence = Math.min(85, 40 + total * 3);
            } else if (ratio < 0.45) {
                leaning = 'Right-Leaning';
                confidence = Math.min(65, 25 + total * 2);
            } else {
                if (total > 6) {
                    leaning = 'Mixed';
                    confidence = Math.min(70, 35 + total * 2);
                } else {
                    leaning = 'Center';
                    confidence = Math.min(55, 20 + total * 3);
                }
            }
        }

        return { leaning, confidence: Math.round(confidence), leftScore, rightScore };
    }

    // =====================
    // STEP 6: PROPAGANDA
    // =====================
    _detectPropaganda(lower) {
        const techniques = [];

        for (const [key, config] of Object.entries(this.propagandaPatterns)) {
            for (const pattern of config.patterns) {
                const regex = new RegExp(this._escapeRegex(pattern), 'gi');
                if (regex.test(lower)) {
                    if (!techniques.find(t => t.name === config.name)) {
                        techniques.push({
                            name: config.name,
                            description: config.description,
                            evidence: pattern
                        });
                    }
                    break;
                }
            }
        }

        return { techniques };
    }

    // =====================
    // STEP 7: BIAS SCORE
    // =====================
    _calculateBiasScore(emotionScore, languageScore, framingScore, balanceScore, propagandaScore) {
        const score = (emotionScore * 0.25) +
            (languageScore * 0.20) +
            (framingScore * 0.20) +
            ((100 - balanceScore) * 0.20) +
            (propagandaScore * 0.15);
        return Math.round(Math.max(0, Math.min(100, score)));
    }

    _biasCategory(score) {
        if (score <= 20) return 'Highly Neutral';
        if (score <= 40) return 'Slight Bias';
        if (score <= 60) return 'Moderate Bias';
        if (score <= 80) return 'Strong Bias';
        return 'Highly Partisan';
    }

    _weightExplanation(emo, lang, frame, bal, prop, final) {
        return `Emotion(${emo}×25%) + Language(${lang}×20%) + Framing(${frame}×20%) + Imbalance(${100 - bal}×20%) + Propaganda(${prop}×15%) = ${final}`;
    }

    // =====================
    // SUGGESTIONS
    // =====================
    _generateSuggestions(emotion, loaded, framing, balance) {
        const suggestions = [];
        if (emotion.intensity > 40) {
            suggestions.push('Reduce emotionally charged language and replace subjective adjectives with neutral, factual descriptions.');
        }
        if (loaded.phrases.length > 3) {
            suggestions.push('Replace loaded terms like ' + loaded.phrases.slice(0, 2).map(p => `"${p.phrase}"`).join(', ') + ' with neutral alternatives.');
        }
        if (balance.score < 50) {
            suggestions.push('Include more diverse sources and present opposing viewpoints to improve balance and credibility.');
        }
        if (framing.observations.some(o => o.includes('one perspective'))) {
            suggestions.push('Present counterarguments alongside the main narrative to give readers a fuller picture.');
        }
        if (suggestions.length === 0) {
            suggestions.push('The article is relatively well-balanced. Minor improvements could include additional source attribution.');
        }
        return suggestions.slice(0, 3);
    }

    // =====================
    // HELPERS
    // =====================
    _countWords(text) {
        return text.split(/\s+/).filter(w => w.length > 0).length;
    }

    _escapeRegex(str) {
        return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    _capitalize(str) {
        return str.replace(/([A-Z])/g, ' $1').replace(/^./, s => s.toUpperCase()).trim();
    }

    _extractContext(text, index, radius) {
        const start = Math.max(0, index - radius);
        const end = Math.min(text.length, index + radius);
        let ctx = text.slice(start, end).replace(/\n/g, ' ').trim();
        if (start > 0) ctx = '...' + ctx;
        if (end < text.length) ctx += '...';
        return ctx;
    }

    _hasEmotionalWeight(text) {
        const allEmotionWords = Object.values(this.emotionKeywords).flat();
        return allEmotionWords.some(w => text.includes(w));
    }

    _quickEmotionScore(text) {
        let count = 0;
        const allWords = Object.values(this.emotionKeywords).flat();
        for (const w of allWords) {
            if (text.includes(w)) count++;
        }
        return count;
    }

    _avgLoadedSeverity(phrases) {
        if (phrases.length === 0) return 0;
        const severityMap = { Low: 25, Medium: 55, High: 85 };
        const total = phrases.reduce((a, p) => a + (severityMap[p.severity] || 30), 0);
        return Math.round(Math.min(100, (total / phrases.length) + phrases.length * 3));
    }

    _avgFraming(observations) {
        if (observations.length === 0) return 0;
        // More observations = higher framing influence
        const balanced = observations.some(o => o.includes('balanced') || o.includes('no major'));
        if (balanced && observations.length <= 1) return 10;
        return Math.min(100, observations.length * 18);
    }

    _propagandaScore(techniques) {
        if (techniques.length === 0) return 0;
        return Math.min(100, techniques.length * 18 + 10);
    }

    _aggregateTone(sections) {
        const tones = sections.map(s => s.tone);
        const order = ['Neutral', 'Slightly Emotional', 'Emotional', 'Highly Emotional'];
        let maxIdx = 0;
        for (const t of tones) {
            const idx = order.indexOf(t);
            if (idx > maxIdx) maxIdx = idx;
        }
        return order[maxIdx];
    }

    _aggregateLeaning(sections) {
        const counts = {};
        for (const s of sections) {
            counts[s.political_leaning] = (counts[s.political_leaning] || 0) + 1;
        }
        return Object.entries(counts).sort((a, b) => b[1] - a[1])[0]?.[0] || 'Undetermined';
    }

    _deduplicateTechniques(techniques) {
        const seen = new Set();
        return techniques.filter(t => {
            if (seen.has(t.name)) return false;
            seen.add(t.name);
            return true;
        });
    }
}


// =============================================
// UI CONTROLLER
// =============================================
class UIController {
    constructor() {
        this.engine = new AnalysisEngine();
        this.init();
    }

    init() {
        // DOM references
        this.articleInput = document.getElementById('articleInput');
        this.analyzeBtn = document.getElementById('analyzeBtn');
        this.clearBtn = document.getElementById('clearBtn');
        this.wordCountEl = document.getElementById('wordCount');
        this.resultsSection = document.getElementById('resultsSection');
        this.jsonToggleBtn = document.getElementById('jsonToggle');
        this.jsonOutput = document.getElementById('jsonOutput');

        // Event listeners
        this.analyzeBtn.addEventListener('click', () => this.runAnalysis());
        this.clearBtn.addEventListener('click', () => this.clearAll());
        this.articleInput.addEventListener('input', () => this.updateWordCount());
        this.jsonToggleBtn.addEventListener('click', () => this.toggleJson());

        // Nav scroll
        window.addEventListener('scroll', () => {
            const nav = document.querySelector('.nav');
            if (nav) nav.classList.toggle('scrolled', window.scrollY > 40);
        });

        // Smooth scroll for nav links
        document.querySelectorAll('.nav-links a').forEach(a => {
            a.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(a.getAttribute('href'));
                if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
        });
    }

    updateWordCount() {
        const words = this.articleInput.value.trim().split(/\s+/).filter(w => w.length > 0).length;
        this.wordCountEl.textContent = `${words} word${words !== 1 ? 's' : ''}`;
    }

    async runAnalysis() {
        const text = this.articleInput.value.trim();
        if (!text) {
            this.shake(this.articleInput);
            return;
        }

        // Loading state
        this.analyzeBtn.classList.add('loading');
        this.resultsSection.classList.remove('visible');

        // Simulate processing delay for UX
        await this._delay(800 + Math.random() * 700);

        const result = this.engine.analyze(text);
        if (!result) {
            this.analyzeBtn.classList.remove('loading');
            return;
        }

        this.renderResults(result);
        this.analyzeBtn.classList.remove('loading');
        this.resultsSection.classList.add('visible');

        // Scroll to results
        setTimeout(() => {
            this.resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 200);

        // Animate gauges after visible
        setTimeout(() => this.animateGauges(result), 500);
        setTimeout(() => this.animateScoreBars(), 600);

        // Store JSON for toggle
        this._jsonData = this._buildJsonOutput(result);
    }

    renderResults(r) {
        // Article meta
        document.getElementById('metaWordCount').textContent = `${r.wordCount} words`;
        document.getElementById('metaSections').textContent = r.sectionalApplied ? 'Sectional' : 'Full';

        // Sectional notice
        const notice = document.getElementById('sectionalNotice');
        if (r.sectionalApplied) {
            notice.classList.remove('hidden');
        } else {
            notice.classList.add('hidden');
        }

        // Short article notice
        const shortNotice = document.getElementById('shortNotice');
        if (r.shortArticle) {
            shortNotice.classList.remove('hidden');
        } else {
            shortNotice.classList.add('hidden');
        }

        // Summary panel
        this.renderGauge(r.bias_score, r.bias_category);
        this.renderSummaryItems(r);

        // Analysis cards
        this.renderEmotionalTone(r);
        this.renderLoadedLanguage(r);
        this.renderFraming(r);
        this.renderBalance(r);
        this.renderPoliticalLeaning(r);
        this.renderPropaganda(r);
        this.renderBiasScore(r);

        // Suggestions
        this.renderSuggestions(r);

        // JSON reset
        this.jsonOutput.classList.remove('visible');
        this.jsonToggleBtn.classList.remove('active');
    }

    // ---- Gauge ----
    renderGauge(score, category) {
        const gaugeCircle = document.getElementById('gaugeFill');
        const gaugeText = document.getElementById('gaugeScoreText');
        const gaugeLabel = document.getElementById('gaugeCategory');

        gaugeText.textContent = score;
        gaugeLabel.textContent = category;
        gaugeLabel.className = 'gauge-category ' + this._biasCategoryClass(score);

        // Color
        const color = this._scoreColor(score);
        gaugeCircle.setAttribute('stroke', color);
        gaugeLabel.style.background = this._scoreColorBg(score);
        gaugeLabel.style.color = color;
    }

    animateGauges(r) {
        const gaugeCircle = document.getElementById('gaugeFill');
        const circumference = 2 * Math.PI * 80; // r=80
        const offset = circumference - (r.bias_score / 100) * circumference;
        gaugeCircle.style.strokeDashoffset = offset;
    }

    animateScoreBars() {
        document.querySelectorAll('.score-bar-fill[data-target]').forEach(bar => {
            const target = bar.getAttribute('data-target');
            bar.style.width = target + '%';
        });
    }

    // ---- Summary Items ----
    renderSummaryItems(r) {
        document.getElementById('summaryTone').textContent = r.tone;
        document.getElementById('summaryEmotion').textContent = r.dominant_emotions.join(', ');
        document.getElementById('summaryLeaning').textContent = `${r.political_leaning} (${r.confidence_percentage}%)`;
        document.getElementById('summaryBalance').textContent = `${r.balance_score}/100`;
    }

    // ---- Card 1: Emotional Tone ----
    renderEmotionalTone(r) {
        const container = document.getElementById('emotionalToneBody');
        container.innerHTML = `
      <div class="score-bar-container">
        <div class="score-bar-label">
          <span>Emotional Intensity</span>
          <span style="color:${this._scoreColor(r.emotional_intensity_score)}">${r.emotional_intensity_score}/100</span>
        </div>
        <div class="score-bar">
          <div class="score-bar-fill" data-target="${r.emotional_intensity_score}" style="background:${this._scoreColor(r.emotional_intensity_score)}"></div>
        </div>
      </div>
      <p class="mt-1"><strong>Overall Tone:</strong> ${r.tone}</p>
      <p class="mt-1"><strong>Dominant Emotions:</strong> ${r.dominant_emotions.join(', ')}</p>
      <p class="mt-2" style="font-size:0.84rem;color:#999;">${this._toneGuidance(r.emotional_intensity_score)}</p>
    `;
    }

    // ---- Card 2: Loaded Language ----
    renderLoadedLanguage(r) {
        const container = document.getElementById('loadedLanguageBody');
        if (r.loaded_language.length === 0) {
            container.innerHTML = '<p style="color:#999;">No significant loaded language detected.</p>';
            return;
        }
        container.innerHTML = `
      <p>${r.loaded_language.length} loaded phrase${r.loaded_language.length > 1 ? 's' : ''} detected:</p>
      <div class="phrase-list">
        ${r.loaded_language.slice(0, 8).map(p => `
          <div class="phrase-item sev-${p.severity.toLowerCase()}">
            <div>
              <div class="phrase-quote">"${this._escapeHTML(p.phrase)}"</div>
              <div class="phrase-reason">${this._escapeHTML(p.reason)}</div>
            </div>
            <span class="phrase-severity severity-${p.severity.toLowerCase()}">${p.severity}</span>
          </div>
        `).join('')}
      </div>
    `;
    }

    // ---- Card 3: Framing ----
    renderFraming(r) {
        const container = document.getElementById('framingBody');
        container.innerHTML = `
      <div class="observation-list">
        ${r.framing_observations.map(o => `
          <div class="observation-item">
            <div class="observation-bullet"></div>
            <span>${this._escapeHTML(o)}</span>
          </div>
        `).join('')}
      </div>
    `;
    }

    // ---- Card 4: Balance ----
    renderBalance(r) {
        const container = document.getElementById('balanceBody');
        container.innerHTML = `
      <div class="score-bar-container">
        <div class="score-bar-label">
          <span>Balance Score</span>
          <span style="color:${this._scoreColor(100 - r.balance_score)}">${r.balance_score}/100</span>
        </div>
        <div class="score-bar">
          <div class="score-bar-fill" data-target="${r.balance_score}" style="background:${this._invertedScoreColor(r.balance_score)}"></div>
        </div>
      </div>
      ${r.balance_details ? `<div class="observation-list mt-2">
        ${r.balance_details.map(d => `
          <div class="observation-item">
            <div class="observation-bullet"></div>
            <span>${this._escapeHTML(d)}</span>
          </div>
        `).join('')}
      </div>` : ''}
    `;
    }

    // ---- Card 5: Political Leaning ----
    renderPoliticalLeaning(r) {
        const container = document.getElementById('politicalLeaningBody');
        let markerPos;
        switch (r.political_leaning) {
            case 'Left-Leaning': markerPos = 15; break;
            case 'Center': markerPos = 50; break;
            case 'Right-Leaning': markerPos = 85; break;
            case 'Mixed': markerPos = 50; break;
            default: markerPos = 50;
        }
        container.innerHTML = `
      <div class="leaning-indicator">
        <div style="flex:1">
          <div class="leaning-spectrum">
            <div class="leaning-marker" style="left:${markerPos}%"></div>
          </div>
          <div style="display:flex;justify-content:space-between;margin-top:6px;font-size:0.72rem;color:#aaa;">
            <span>Left</span><span>Center</span><span>Right</span>
          </div>
        </div>
        <div style="text-align:right;min-width:130px;">
          <div class="leaning-label">${r.political_leaning}</div>
          <div class="leaning-confidence">Confidence: ${r.confidence_percentage}%</div>
        </div>
      </div>
    `;
    }

    // ---- Card 6: Propaganda ----
    renderPropaganda(r) {
        const container = document.getElementById('propagandaBody');
        if (r.propaganda_techniques.length === 0) {
            container.innerHTML = '<p style="color:#999;">No propaganda techniques detected.</p>';
            return;
        }
        container.innerHTML = `
      <div class="technique-list">
        ${r.propaganda_techniques.map(t => `
          <div class="technique-item">
            <div class="technique-name">${this._escapeHTML(t.name)}</div>
            <div class="technique-desc">${this._escapeHTML(t.description)}</div>
          </div>
        `).join('')}
      </div>
    `;
    }

    // ---- Card 7: Bias Score Breakdown ----
    renderBiasScore(r) {
        const container = document.getElementById('biasScoreBody');
        const cs = r.component_scores || {
            emotionScore: r.emotional_intensity_score,
            languageScore: 0,
            framingScore: 0,
            balanceScore: 100 - r.balance_score,
            propagandaScore: 0
        };
        container.innerHTML = `
      <div class="weight-breakdown">
        <div class="weight-item">
          <div class="weight-item-pct">25%</div>
          <div class="weight-item-label">Emotion</div>
          <div class="weight-item-score" style="color:${this._scoreColor(cs.emotionScore)}">${cs.emotionScore}</div>
        </div>
        <div class="weight-item">
          <div class="weight-item-pct">20%</div>
          <div class="weight-item-label">Language</div>
          <div class="weight-item-score" style="color:${this._scoreColor(cs.languageScore)}">${cs.languageScore}</div>
        </div>
        <div class="weight-item">
          <div class="weight-item-pct">20%</div>
          <div class="weight-item-label">Framing</div>
          <div class="weight-item-score" style="color:${this._scoreColor(cs.framingScore)}">${cs.framingScore}</div>
        </div>
        <div class="weight-item">
          <div class="weight-item-pct">20%</div>
          <div class="weight-item-label">Imbalance</div>
          <div class="weight-item-score" style="color:${this._scoreColor(cs.balanceScore)}">${cs.balanceScore}</div>
        </div>
        <div class="weight-item">
          <div class="weight-item-pct">15%</div>
          <div class="weight-item-label">Propaganda</div>
          <div class="weight-item-score" style="color:${this._scoreColor(cs.propagandaScore)}">${cs.propagandaScore}</div>
        </div>
      </div>
      <p class="mt-2" style="font-size:0.84rem;color:#999;font-family:var(--font-mono);text-align:center;">${r.weight_explanation}</p>
      ${r.sectionScores ? `
        <div class="mt-3">
          <p style="font-weight:600;margin-bottom:10px;">Section-by-Section Bias</p>
          ${r.sectionScores.map(s => `
            <div class="score-bar-container">
              <div class="score-bar-label"><span>${s.label}</span><span style="color:${this._scoreColor(s.score)}">${s.score}</span></div>
              <div class="score-bar"><div class="score-bar-fill" data-target="${s.score}" style="background:${this._scoreColor(s.score)}"></div></div>
            </div>
          `).join('')}
        </div>
      ` : ''}
    `;
    }

    // ---- Suggestions ----
    renderSuggestions(r) {
        const container = document.getElementById('suggestionsBody');
        container.innerHTML = r.suggestions.map((s, i) => `
      <div class="suggestion-item">
        <div class="suggestion-number">${i + 1}</div>
        <span>${this._escapeHTML(s)}</span>
      </div>
    `).join('');
    }

    // ---- JSON Toggle ----
    toggleJson() {
        const isVisible = this.jsonOutput.classList.toggle('visible');
        this.jsonToggleBtn.classList.toggle('active', isVisible);
        if (isVisible && this._jsonData) {
            this.jsonOutput.innerHTML = this._syntaxHighlightJson(JSON.stringify(this._jsonData, null, 2));
        }
    }

    _buildJsonOutput(r) {
        return {
            tone: r.tone,
            emotional_intensity_score: r.emotional_intensity_score,
            dominant_emotions: r.dominant_emotions,
            loaded_language: r.loaded_language.map(p => ({
                phrase: p.phrase,
                severity: p.severity,
                reason: p.reason
            })),
            framing_observations: r.framing_observations,
            balance_score: r.balance_score,
            propaganda_techniques: r.propaganda_techniques.map(t => t.name),
            political_leaning: r.political_leaning,
            confidence_percentage: r.confidence_percentage,
            bias_score: r.bias_score,
            bias_category: r.bias_category,
            weight_explanation: r.weight_explanation
        };
    }

    _syntaxHighlightJson(json) {
        const escaped = json
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
        return escaped.replace(
            /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
            (match) => {
                let cls = 'json-number';
                if (/^"/.test(match)) {
                    cls = /:$/.test(match) ? 'json-key' : 'json-string';
                } else if (/true|false/.test(match)) {
                    cls = 'json-bool';
                }
                return `<span class="${cls}">${match}</span>`;
            }
        );
    }

    // ---- Utility ----
    clearAll() {
        this.articleInput.value = '';
        this.wordCountEl.textContent = '0 words';
        this.resultsSection.classList.remove('visible');
        this.jsonOutput.classList.remove('visible');
        this.jsonToggleBtn.classList.remove('active');
        this.articleInput.focus();
    }

    shake(el) {
        el.style.animation = 'none';
        el.offsetHeight; // reflow
        el.style.animation = 'shake 0.4s ease';
        setTimeout(() => { el.style.animation = ''; }, 500);
    }

    _delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    _scoreColor(score) {
        if (score <= 25) return '#9CAF88';
        if (score <= 50) return '#C17A5F';
        if (score <= 75) return '#B85450';
        return '#943e3b';
    }

    _scoreColorBg(score) {
        if (score <= 25) return 'rgba(156,175,136,0.12)';
        if (score <= 50) return 'rgba(193,122,95,0.12)';
        if (score <= 75) return 'rgba(184,84,80,0.12)';
        return 'rgba(148,62,59,0.15)';
    }

    _invertedScoreColor(score) {
        // Higher score = more balanced = green
        if (score >= 70) return '#9CAF88';
        if (score >= 45) return '#C17A5F';
        return '#B85450';
    }

    _biasCategoryClass(score) {
        if (score <= 20) return 'severity-low';
        if (score <= 40) return 'severity-low';
        if (score <= 60) return 'severity-med';
        return 'severity-high';
    }

    _toneGuidance(score) {
        if (score <= 20) return 'Objective tone — language is factual with minimal emotional cues.';
        if (score <= 40) return 'Mild persuasive language — subtle emotional undertones present.';
        if (score <= 60) return 'Noticeable emotional cues — language influences reader perception.';
        if (score <= 80) return 'Strong emotional framing — language significantly shapes reader response.';
        return 'Highly charged rhetoric — content is heavily loaded with emotional language.';
    }

    _escapeHTML(str) {
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }
}

// ---- Initialize ----
document.addEventListener('DOMContentLoaded', () => {
    window.biasLens = new UIController();
});
