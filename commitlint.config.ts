import { RuleConfigSeverity, type UserConfig } from '@commitlint/types';

const MAX_HEADER_LENGTH = 72;

/** Commit types allowed by the commit conventions in docs/plan.md. */
const TYPES = ['feat', 'fix', 'refactor', 'test', 'docs', 'build', 'ci', 'chore', 'perf'];

/** One scope per workspace package plus cross-cutting areas; `repo` covers repository-wide changes. */
const SCOPES = ['web', 'ui', 'tokens', 'auth', 'invite-cli', 'docs', 'ci', 'deps', 'repo'];

const config: UserConfig = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [RuleConfigSeverity.Error, 'always', TYPES],
    'scope-enum': [RuleConfigSeverity.Error, 'always', SCOPES],
    'scope-empty': [RuleConfigSeverity.Error, 'never'],
    'subject-case': [RuleConfigSeverity.Error, 'always', 'lower-case'],
    'subject-full-stop': [RuleConfigSeverity.Error, 'never', '.'],
    'header-max-length': [RuleConfigSeverity.Error, 'always', MAX_HEADER_LENGTH],
  },
};

export default config;
